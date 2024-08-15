-- CreateTable
CREATE TABLE "ReplicatedData" (
    "id" SERIAL NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReplicatedData_pkey" PRIMARY KEY ("id")
);
