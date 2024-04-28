
interface Store {
    isTabPersonal: boolean
    setTab: (value: boolean) => void
}

export const store = reactive<Store>({
    isTabPersonal: true,
    setTab(value) {
        this.isTabPersonal = value
    }
})