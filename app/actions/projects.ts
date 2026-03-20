'use server'

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const github = formData.get("github") as string
  const link = formData.get("link") as string

  const techString = formData.get("tech") as string
  const tech = techString.split(",").map(item => item.trim())

  await prisma.project.create({
    data: {
      title,
      description,
      github,
      link,
      tech
    }
  })

  revalidatePath("/")
}