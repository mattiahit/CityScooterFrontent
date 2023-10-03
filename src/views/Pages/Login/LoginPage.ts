import type { LoginFormModel } from "@/model/LoginFormModel";
import { type FormInstance, type FormRules } from "element-plus";
import { defineComponent, reactive, ref } from "vue";


export default defineComponent({
    name: "LoginComponent",
    setup() {
        const formLoginRef = ref<FormInstance>();
        const formLogin = reactive<LoginFormModel>({
            username: "",
            password: ""
        })
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
        })

        return {
            formLoginRef,
            formLogin,
            rules,
        }
    }
})