import { getTypeByID } from "@services/typesAPI"

export async function loadCategory(id) {
    const category = await getTypeByID(id);
    const devicesArr = category.devices_ids;
    return { name: category.name, devicesArr: devicesArr }
}