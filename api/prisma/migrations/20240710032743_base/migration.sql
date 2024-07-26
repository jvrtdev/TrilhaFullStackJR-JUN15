-- CreateEnum
CREATE TYPE "Role" AS ENUM ('standard', 'admin');

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" TEXT DEFAULT 'standard',
ALTER COLUMN "profile_img" DROP NOT NULL;
