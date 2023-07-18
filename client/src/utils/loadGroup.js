import { getGroupByID } from "@services/groupsAPI";
import {getTypesWithParams} from "@services/typesAPI";

export async function loadGroup(id) {
    const group = await getGroupByID(id);
    const typesArr = await getTypesWithParams({ group: id });
    return { name: group.name, typesArr: typesArr, groupId: id }
}