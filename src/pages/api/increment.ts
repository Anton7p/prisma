import prisma from "../../lib/prisma";
import {NextApiRequest, NextApiResponse} from "next";


export default async function handle() {

    await prisma.visit.upsert({
        where: {id: 1},
        create: {id: 1, count: 1},
        update: {count: {increment: 1}},
    });

}