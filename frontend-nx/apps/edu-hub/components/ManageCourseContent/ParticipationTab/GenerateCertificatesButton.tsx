import { useIsAdmin } from '../../../hooks/authentication';
import { useRoleMutation } from '../../../hooks/authedMutation';
import useTranslation from 'next-translate/useTranslation';

import { Button } from '../../common/Button';
import { CREATE_ACHIEVEMENT_CERTIFICATE } from '../../../queries/actions';
import { CREATE_PARTICIPATION_CERTIFICATE } from '../../../queries/actions';
import {
  ManagedCourse_Course_by_pk,
  ManagedCourse_Course_by_pk_CourseEnrollments,
} from '../../../queries/__generated__/ManagedCourse';

import { useState } from 'react';

export const GenerateCertificatesButton = ({
  participationList,
  course,
}: {
  participationList: ManagedCourse_Course_by_pk_CourseEnrollments[];
  course: ManagedCourse_Course_by_pk;
}) => {
  const isAdmin = useIsAdmin();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [createAchievementCertificate, { loading, error, data }] =
    useRoleMutation(CREATE_ACHIEVEMENT_CERTIFICATE, {
      variables: {
        courseId: course.id,
        userIds: participationList.map((p) => p.userId),
      },
    });

  const handleClick = () => {
    createAchievementCertificate()
      .then((result) => {
        setSuccessMessage(
          t('course-page:' + result.data.createAchievementCertificate.result)
        );
      })
      .catch((error) => {
        console.error('Error creating achievement certificate:', error);
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="flex justify-end mt-10">
      {errorMessage && <div className="text-red-500 mr-2">{errorMessage}</div>}
      {successMessage && (
        <div className="text-green-500 mr-2">{successMessage}</div>
      )}
      <Button filled inverted onClick={handleClick}>
        {loading
          ? 'Loading...'
          : error
          ? t('course-page:certificate-generation')
          : t('course-page:certificate-generation')}
      </Button>
    </div>
  );
};