<template>
    <div class="common-layout">
        <el-container id="root">
            <el-main id="main_container">
                <img src="./../../../assets/scooter_bg.svg" />
            </el-main>
            <el-aside id="login_container">
                <div id="login_form">
                    <img src="./../../../assets/electric-scooter.png" />
                    <h3>Login</h3>
                    <el-form
                        :rules="rules">
                        <el-form-item prop="username">
                            <el-input v-model="formLogin.username" placeholder="User"/>
                        </el-form-item>
                        <el-form-item prop="password">
                            <el-input v-model="formLogin.password" placeholder="Password" type="password" show-password/>
                        </el-form-item>
                        <el-form-item>
                            <el-button id="login_button" color="#50BFA5">
                                Login
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-aside>
        </el-container>
    </div>
</template>
<script lang="ts" src="./LoginPage.ts" />
<style scoped>
    .common_layout {
        position: relative;
    }
    #root {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 95%;
    }
    #main_container, #login_container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #login_container {
      padding: 30px;
    }
    #main_container img {
        width: 70%;
    }
    #login_form img {
        width: 40%;
    }
    #login_form {
        text-align: center;
    }
    #login_button {
        position: absolute;
        right: 0px;
        margin-top: 30px;
    }
</style>