import { useEffect, useState } from "react";
import TypeStatisticLine from "@components/TypeStatisticLine";
import { getTypesWithParams } from "@services/typesAPI"

export function useGroupStatistic(group, usage) {
    const [typesStatistic, setTypeStatistic] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getTypesStatistic() {
            const types = await getTypesWithParams({ usage: usage });
            const statistic = types
                .filter(type => type.group.name === group)
            setTypeStatistic(statistic);
            setIsLoading(false)
        }
        getTypesStatistic()
    }, [group, usage])

    return [typesStatistic, isLoading]
}
