// 定义筛选路由的方法
export function ruleMenu (menuList, beList) {
  if (menuList.length === beList.length) {
    return menuList
  } else {
    return menuList.slice(0, -1)
  }
}
