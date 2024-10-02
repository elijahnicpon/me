<template>
    <div class="modal-overlay" @click="$emit('close')">
        <div class="modal-content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal'
}
</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background-color: #1e1e1e;
    padding: 2rem;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    max-width: 90%;
    max-height: 90%;
    overflow-y: auto;
    color: #d4d4d4;
    border: 1px solid #3c3c3c;
}
</style>
