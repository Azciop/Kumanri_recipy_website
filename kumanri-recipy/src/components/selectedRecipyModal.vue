<template>
    <div class="modal-overlay" @click="$emit('close-modal')">
        <div class="modal">
            <h6>Recipy Title</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore est vitae qui delectus odio
                expedita. Pariatur quae ipsam suscipit tenetur minus cum accusantium eos iure nostrum id vitae, nihil
                mollitia neque distinctio dignissimos animi aliquam. Repellat autem velit dolorem, molestiae
                necessitatibus, optio facere, nisi ea accusantium expedita aperiam deleniti ab distinctio alias nobis
                tenetur ipsam animi? Iste hic sint dolore? Rem molestiae perspiciatis architecto odio deleniti corrupti,
                illo cumque.</p>
            <img src="../assets/recipy-img-test.jpeg" alt="">
        </div>
        <div class="close" @click="$emit('close-modal')">
            <font-awesome-icon class="close-img" icon="fa-solid fa-circle-xmark" />
        </div>
    </div>
</template>
  
<script>
export default {
}
</script>

<style>
.modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    background-color: #000000da;
}

.modal {
    position: relative;
    text-align: center;
    background-color: rgb(148, 140, 140);
    height: auto;
    max-height: 500px;
    width: 80%;
    margin-top: 10%;
    padding: 40px 0;
    border-radius: 20px;
}

.close {
    position: relative;
    margin: 10% 0 0 16px;
    cursor: pointer;
}

.close-img {
    position: absolute;
    font-size: 25px;
    color: red;
    top: 10px;
    right: 25px;
}

h6 {
    font-weight: 500;
    font-size: 28px;
    margin: 0;
}

p {
    font-size: 16px;
    margin: 20px 40px;
}

img {
    width: 50%;
    height: auto;
    object-fit: cover;
}

.btn-modal {
    background-color: #ac003e;
    width: 150px;
    height: 40px;
    color: white;
    font-size: 14px;
    border-radius: 16px;
    margin-top: 10px;
}
</style>