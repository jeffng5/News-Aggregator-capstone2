\echo 'Delete and recreate news db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE news;
CREATE DATABASE news;
\connect news

\i news-schema.sql
-- \i news-seed.sql