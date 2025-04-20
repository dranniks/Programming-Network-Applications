import {ProductPage} from "../product/index.js";
import { ProductCardComponent } from "../../components/product-card/index.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
            `
        )
    }
        
    getData() {
        return [
            {
                id: 1,
                src: "https://cryptologos.cc/logos/arbitrum-arb-logo.png",
                title: "Arbitrum One",
                text: "Лидер среди L2 решений с оптимистичными роллапами",
                fulltext: "Первый в мире оптимистический rollup с EVM-совместимостью. Обрабатывает >40% всего L2 трафика Ethereum. Использует многопроходную систему валидации.",
                cap: "$2.5B",
                popular: "87%",
                users: "2.1M",
                coins: ["ETH", "ARB", "USDC"],
                tps: 40,
                security: "Ethereum-level"
            },
            {
                id: 2,
                src: "https://cryptologos.cc/logos/optimism-op-logo.png",
                title: "Optimism",
                text: "Пионер Optimistic Rollup технологий",
                fulltext: "Вторая по величине L2 сеть с собственной экосистемой DeFi. Реализует концепцию Ethereum Virtual Machine (EVM) equivalence. Основной компонент Superchain экосистемы.",
                cap: "$1.8B",
                popular: "79%",
                users: "1.8M",
                coins: ["ETH", "OP", "DAI"],
                tps: 35,
                security: "Fraud proofs"
            },
            {
                id: 3,
                src: "https://cryptologos.cc/logos/polygon-matic-logo.png",
                title: "Polygon zkEVM",
                text: "ZK-Rollup с полной EVM совместимостью",
                fulltext: "Первая в мире zero-knowledge L2 с полной эквивалентностью EVM. Использует революционные zkSNARKs для мгновенных выводов средств. Часть экосистемы Polygon 2.0.",
                cap: "$1.2B",
                popular: "68%",
                users: "950K",
                coins: ["MATIC", "ETH", "USDT"],
                tps: 150,
                security: "ZK proofs"
            },
            {
                id: 4,
                src: "https://starkware.co/wp-content/uploads/2022/01/logo-starknet.svg",
                title: "StarkNet",
                text: "ZK-STARK технология от StarkWare",
                fulltext: "Платформа общего назначения с поддержкой Cairo VM. Обеспечивает невероятную пропускную способность за счет криптографии следующего поколения. Используется для сложных DeFi операций.",
                cap: "N/A",
                popular: "54%",
                users: "620K",
                coins: ["ETH", "STRK"],
                tps: 3000,
                security: "STARK proofs"
            },
            {
                id: 5,
                src: "https://www.gitbook.com/cdn-cgi/image/width=40,dpr=2,height=40,fit=contain,format=auto/https%3A%2F%2F3892395534-files.gitbook.io%2F~%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F-Mkz0Z4wVQnQY3m5q9s0%252Ficon%252F5U0Vd3E4J3Fg2n9yZ0zC%252FBase_Icon_Blue.png%3Falt%3Dmedia%26token%3Dd0d3a4a7-ffc5-4b68-8d4c-1a0e5b4c6a5e",
                title: "Base",
                text: "L2 решение от Coinbase на OP Stack",
                fulltext: "Официальная L2 сеть Coinbase, построенная на модифицированной версии OP Stack. Интегрирована с Coinbase Exchange для мгновенных трансакций. Основной хаб для CBDC экспериментов.",
                cap: "$900M",
                popular: "63%",
                users: "1.3M",
                coins: ["ETH", "USDC", "CBETH"],
                tps: 45,
                security: "Hybrid rollup"
            },
            {
                id: 6,
                src: "https://cryptologos.cc/logos/zksync-zks-logo.png",
                title: "zkSync Era",
                text: "ZK-Rollup с нативой аккаунт абстракцией",
                fulltext: "Третья версия zkSync с поддержкой Volition режима и смарт-контрактов LLVM-совместимых. Основной фокус - массовая адаптация через UX улучшения. Планирует децентрализованную sequencing сеть.",
                cap: "N/A",
                popular: "71%",
                users: "890K",
                coins: ["ETH", "ZK"],
                tps: 2000,
                security: "zkSync Prover"
            }
        ]
    }

    clickCard(e) {
        const cardId = e.target.dataset.id
    
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot);
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}