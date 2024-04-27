import { db } from "./db";

export const getMealtypebyMealtypeName = async (mealtype_name:string) => {
    try {
        const mealtype = await db.mealtypes.findFirst({
            where: { mealtype:mealtype_name }
        })
        return mealtype;
    } catch (error) {
        return null;
    }
}