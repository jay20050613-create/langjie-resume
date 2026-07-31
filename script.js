const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

requestAnimationFrame(() => document.body.classList.add("ready"));

$$('a[href$=".html"], a[href*=".html#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin) return;
    event.preventDefault();
    document.body.classList.add("leaving");
    setTimeout(() => { location.href = url.href; }, 260);
  });
});

const menuButton = $(".menu-button");
if (menuButton) {
  menuButton.addEventListener("click", () => {
    const nav = $(".site-header nav");
    nav.classList.toggle("mobile-open");
  });
}

const cases = {
  tesla: ["CASE 01 · HIGH-TICKET SALES", "让长决策周期，也有清晰节奏。", "按预算、车型、购车时点与意向等级管理线索，设置首触、需求分析、试驾、方案沟通、成交 5 个节点；并联动金融、交付、售后和市场团队推进落地。", "10 台 / 月", "新能源汽车销售"],
  trade: ["CASE 02 · FULL-FUNNEL TRADE", "从第一次询盘，跟到下一次复购。", "通过 LinkedIn、WhatsApp 主动开发多地区 B 端采购商，持续负责询盘、报价、议价、寄样、履约与售后；把一次订单经营成长期客户关系。", "35%", "核心 B 端复购率"],
  global: ["CASE 03 · CROSS-CULTURAL SERVICE", "在全英文高峰现场，沟通必须准确。", "在美国 J-1 项目中完成点单、菜单解释、收银和产品推荐，通过复述订单、核对定制需求与联动前后台岗位，确保信息在快节奏环境中准确传递。", "10+ 国", "国际化经历"]
};

$$(".case-menu button").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".case-menu button").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const item = cases[button.dataset.case];
    $("#case-label").textContent = item[0];
    $("#case-title").textContent = item[1];
    $("#case-copy").textContent = item[2];
    $("#case-result").textContent = item[3];
    $("#case-note").textContent = item[4];
  });
});
