function validate(msg, type) {
    return `
        <p class="alert alert-${type}">${msg} <button type="button"
											class="btn-close"
											data-bs-dismiss="alert" aria-label="Close"></button></p>
    `;
}