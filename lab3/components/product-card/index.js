export class ProductCardComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return (
            `
                <div class="card" style="
                    width: 300px;
                    border: 2px solid  #b48ef0;
                    border-radius: 15px;
                    background: #000;
                    color: #FFF;
                    overflow: hidden;
                    margin: 10px;
                ">
                    <img class="card-img-top" 
                         src="${data.src}" 
                         alt="картинка"
                         style="
                            height: 200px;
                            object-fit: cover;
                            border-radius: 13px 13px 0 0;
                         ">
                    <div class="card-body" style="padding: 1.25rem;">
                        <h5 class="card-title" style="
                            font-size: 1.25rem;
                            margin-bottom: 0.75rem;
                        ">${data.title}</h5>
                        <p class="card-text" style="
                            font-size: 0.9rem;
                            line-height: 1.4;
                            margin-bottom: 1.25rem;
                        ">${data.text}</p>
                        <button class="btn" 
                                id="click-card-${data.id}" 
                                data-id="${data.id}"
                                style="
                                    background: #b48ef0;
                                    color: #000;
                                    font-weight: 500;
                                ">
                            Нажми на меня
                        </button>
                    </div>
                </div>
            `
        )
    }
    
    addListeners(data, listener) {
        document
            .getElementById(`click-card-${data.id}`)
            .addEventListener("click", listener)
    }
    
    render(data, listener) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
        this.addListeners(data, listener)
    }
}