comment on column "public"."Program"."achievementCertificateTemplateURL" is E'Admins can add new program, which are basically a set of courses with similar characteristics and a similar time frame. The table also includes default values for the courses, which might be adapted on the course level though.';
alter table "public"."Program" alter column "achievementCertificateTemplateURL" drop not null;
alter table "public"."Program" add column "achievementCertificateTemplateURL" text;
