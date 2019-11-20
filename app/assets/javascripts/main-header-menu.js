// document.addEventListener("DOMContentLoaded", function() { 

    var mainHeader = document.querySelector(".main-header")
    var dropdownMenu = document.querySelector(".dropdown-menu ul")
    var dropdownMenuItems = document.querySelectorAll(".dropdown-menu-item")
    var HEADER_HEIGHT = 70
    var DROPDOWN_MENU_HEIGHT = 360
    var TOP_DISTANCE_TO_HIDE_THE_HEADER = 330
    
    // SHOW/HIDE MAIN HEADER ON SCROLL
    var showMainHeader = () => mainHeader.style.top = "0"
    var hideMainHeader = () => mainHeader.style.top = `-${HEADER_HEIGHT}px`
    var previousScrollPosition = window.pageYOffset
    
    var toggleMainHeader = window.onscroll = () => {
        let currentScrollPosition = window.pageYOffset
        if (previousScrollPosition > currentScrollPosition || currentScrollPosition < TOP_DISTANCE_TO_HIDE_THE_HEADER) showMainHeader()
        else hideMainHeader()
        previousScrollPosition = currentScrollPosition
    }
    
    // TOGGLE DROPDOWN MENU
    var dropdownMenuState = 0
    var openDropdownMenu = () => dropdownMenu.style.height = `${DROPDOWN_MENU_HEIGHT}px`
    
    var closeDropdownMenu = () => {
        dropdownMenuState = 0
        dropdownMenu.style.height = "0"
    }
    
    var toggleDropdownMenu = n => {
        dropdownMenuState += n
        switch (dropdownMenuState) {
            case 1:
                openDropdownMenu()
                break
            case 2:
                closeDropdownMenu()
                break
            default:
                closeDropdownMenu()
        }
    }
    
    var closeDropdownMenuSelectingItem = (() => dropdownMenuItems.forEach((item) => item.addEventListener("click", closeDropdownMenu)))()

// });    
    
    
    
    
    
    
    