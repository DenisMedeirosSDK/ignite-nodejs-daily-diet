-- CreateTable
CREATE TABLE "snack" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isDiet" BOOLEAN NOT NULL,
    "when_was_the_meal" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "snack_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "snack" ADD CONSTRAINT "snack_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
