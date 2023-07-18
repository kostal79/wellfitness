import { useEffect, useState } from "react";
import { getTypesWithParams } from "@services/typesAPI";
import {getGroupsWithParams} from "@services/groupsAPI";

export function useGroupStatistic(groupName, usage) {
    const [typesStatistic, setTypeStatistic] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getTypesStatistic() {
            const types = await getTypesWithParams({ usage: usage });
            const group = await getGroupsWithParams({name: groupName});
            const statistic = types
                .filter(type => type.group.name === groupName)
            setTypeStatistic({statistic: statistic, groupId: group[0]._id});
            setIsLoading(false)
        }
        getTypesStatistic()
    }, [groupName, usage])

    return [typesStatistic, isLoading]
}
