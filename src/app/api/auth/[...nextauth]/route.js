import User from "@/models/User"
import { verifyPassword } from "@/utils/auth"
import connectDB from "@/utils/coonectDB"
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            async authorize(credentials, req) {
                const { email, password } = credentials

                try {
                    await connectDB()
                } catch (err) {
                    throw new Error("can not connected to DB")
                }

                if (!email || !password) {
                    throw new Error("لطفا اطلاعات معتبر وارد کنید")
                }

                const user = await User.findOne({ email: email })

                if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید")

                const isValid = await verifyPassword(password, user.password);

                if (!isValid) throw new Error("ایمیل یا رمز عبور را درست وارد نمایید")

                return { email }
            }
        })
    ]
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }