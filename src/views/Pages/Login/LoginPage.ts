import type { LoginFormModel } from "@/model/LoginFormModel";
import { type FormInstance, type FormRules } from "element-plus";
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

export default defineComponent({
    name: "LoginPage",
    setup() {
        const router = useRouter();
        const formLoginRef = ref<FormInstance>();
        const formLogin = ref<LoginFormModel>({
            username: '',
            password: ''
        });
        const rules = reactive<FormRules<LoginFormModel>>({
            username: [
                {
                    required: true, message: 'Username is required!', trigger: 'blur',
                }
            ],
            password: [
                {
                    required: true, message: 'Password is required!', trigger: 'blur'
                }
            ]
        });

        const handleLogin = () => {
            formLoginRef.value?.validate((valid) => {
                if (valid) {
                    const { username, password } = formLogin.value;
                    if (username === 'user' && password === 'password') {
                        router.push({ name: 'scooter-management', replace: true });
                    } else {
                        ElMessage.error('Invalid username or password');
                    }
                } else {
                    console.log('Validation failed');
                }
            });
        };

        return {
            formLoginRef,
            formLogin,
            rules,
            handleLogin
        };
    }
});