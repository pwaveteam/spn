import { useState, useMemo } from "react"

export default function useFilterBar<T>(data: T[] = [], searchKeys: (keyof T)[] = []) {
  const today = new Date()
  const koreaToday = new Date(today.getTime() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10)

  const [startDate, setStartDate] = useState(koreaToday)
  const [endDate, setEndDate] = useState("")
  const [searchText, setSearchText] = useState("")

  const filteredData = useMemo(() => {
    if (!searchText || searchKeys.length === 0) return data
    return data.filter(item =>
      searchKeys.some(key =>
        String(item[key]).toLowerCase().includes(searchText.toLowerCase())
      )
    )
  }, [data, searchText, searchKeys])

  const resetFilters = () => {
    setStartDate(koreaToday)
    setEndDate("")
    setSearchText("")
  }

  return {
    startDate,
    endDate,
    searchText,
    setStartDate,
    setEndDate,
    setSearchText,
    resetFilters,
    filteredData
  }
}