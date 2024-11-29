<template>
    <div class="common-layout">
        <el-container id="root">
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
        background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #root {
        position: relative;
        width: 90%;
        max-width: 1200px;
        height: 100%;
        background: white;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #login_container {
        padding: 40px;
        background: #fff;
        border-radius: 15px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    #login_form img {
        width: 50%;
        margin-bottom: 20px;
    }
    #login_form {
        text-align: center;
    }
    #login_button {
        width: 100%;
        background-color: #50BFA5;
        color: white;
        border: none;
        padding: 10px 0;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    #login_button:hover {
        background-color: #3a8f7a;
    }
</style>