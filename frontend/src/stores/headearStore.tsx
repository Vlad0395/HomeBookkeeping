import { makeAutoObservable } from 'mobx'

const INIT_STATE = {
    layoutType: 'vertical',
    layoutWidth: 'fluid',
    leftSideBarTheme: 'dark',
    leftSideBarType: 'default',
    topbarTheme: 'light',
    isPreloader: false,
    showRightSidebar: false,
    isMobile: true,
    showSidebar: true,
    leftMenu: false,
}

export class HeaderStore {
    constructor() {
        makeAutoObservable(this)
    }

    leftMenu = INIT_STATE.leftMenu
    layoutType = INIT_STATE.layoutType
    layoutWidth = INIT_STATE.layoutWidth
    leftSideBarTheme = INIT_STATE.leftSideBarTheme
    leftSideBarType = INIT_STATE.leftSideBarType
    topbarTheme = INIT_STATE.topbarTheme
    isPreloader = INIT_STATE.isPreloader
    showRightSidebar = INIT_STATE.showRightSidebar
    isMobile = INIT_STATE.isMobile
    showSidebar = INIT_STATE.showSidebar
    test = 100
    toggleLeftmenu = (isOpen: boolean) => {
        this.leftMenu = isOpen
    }

    changeSidebarType = (sidebarType: string, isMobile: boolean) => {
        this.leftSideBarType = sidebarType
        this.changeLeftSidebarType(sidebarType, isMobile)
    }
    changeBodyAttribute = (attribute: string, value: string) => {
        if (document.body) document.body.setAttribute(attribute, value)
        return true
    }

    manageBodyClass = (cssClass: string, action = 'toggle') => {
        switch (action) {
            case 'add':
                if (document.body) document.body.classList.add(cssClass)
                break
            case 'remove':
                if (document.body) document.body.classList.remove(cssClass)
                break
            default:
                if (document.body) document.body.classList.toggle(cssClass)
                break
        }

        return true
    }

    changeLeftSidebarType = (sidebarType: string, isMobile: boolean) => {
        switch (sidebarType) {
            case 'compact':
                this.changeBodyAttribute('data-sidebar-size', 'small')
                this.manageBodyClass('sidebar-enable', 'remove')
                this.manageBodyClass('vertical-collpsed', 'remove')
                break
            case 'icon':
                this.changeBodyAttribute('data-keep-enlarged', 'true')
                this.manageBodyClass('vertical-collpsed', 'add')
                break
            case 'condensed':
                this.manageBodyClass('sidebar-enable', 'add')
                if (!isMobile) this.manageBodyClass('vertical-collpsed', 'add')
                break
            default:
                this.changeBodyAttribute('data-sidebar-size', '')
                this.manageBodyClass('sidebar-enable', 'remove')
                if (!isMobile) this.manageBodyClass('vertical-collpsed', 'remove')
                break
        }
    }

    showRightSidebarAction = (showRightSidebar: boolean) => {
        this.showRightSidebar = showRightSidebar
    }
    changeSidebarTheme = (theme: string) => {
        this.changeBodyAttribute('data-sidebar', theme)
    }

    Layout = () => {}

    click = (num: number) => {
        this.test = num
    }
}
