-- Database should be prime_feedback
CREATE DATABASE "daily_journal";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" text not null,
  "sleep" text not null,
  "meals" text not null,
  "journal" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "sleep", "meals", "journal")
VALUES ('happy', 'Slept Great', 'Rice and Veg', 'Doing Great!');
