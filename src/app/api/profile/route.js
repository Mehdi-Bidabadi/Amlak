import Profile from "@/models/Profile";
import User from "@/models/User";
import connectDB from "@/utils/coonectDB";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(){
    try{
        await connectDB();

        const profile = await Profile.find().select("-userId");

        return NextResponse.json({data: profile}, {status: 200})
    }catch(err){
        return NextResponse.json({error: "خطایی در سرور رخ داده است"}, 
            {status: 500})
    }
}

export async function POST(req){
    try{
        await connectDB()
        
        const body = await req.json();
        const {
            title,
            description,
            location,
            phone,
            realState,
            price,
            constructionDate,
            amenities,
            rules,
            category,

        } = body;

        const session = await getServerSession(req);
        if(!session) {
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید"},
            {status: 401}
            );
        }

        const user = await User.findOne({email : session.user.email})
        if(!user){
            return NextResponse.json({error: "حساب کاربری یافت نشد"}, 
                {status: "404"}
            )
        }
        console.log(user);

        if(!title || !location || !description || !realState || !price || !constructionDate){
            return NextResponse.json({error: "لطفا اطلاهات معتبر وارد کنید"}, 
                {status: 400}
            )
        }

        const newProfile = await Profile.create({
            title,
            description,
            location,
            phone,
            realState,
            price,
            constructionDate,
            amenities,
            rules,
            category,
            price: +price,
            userId: new Types.ObjectId(user._id),

        })
        console.log(newProfile);

        return NextResponse.json({message: "اگهی جدید اضافه شد"}, {status: 201})

    }catch(err){
        return NextResponse.json({error: "خطایی در سرور رخ داده است"}, 
            {status: 500})
    }
};

export async function PATCH(req){
    try{
        await connectDB()
        
        const body = await req.json();
        const {
            _id,
            title,
            description,
            location,
            phone,
            realState,
            price,
            constructionDate,
            amenities,
            rules,
            category,

        } = body;

        const session = await getServerSession(req);
        if(!session) {
            return NextResponse.json({error: "لطفا وارد حساب کاربری خود شوید"},
            {status: 401}
            );
        }
        const user = await User.findOne({email : session.user.email})
        if(!user){
            return NextResponse.json({error: "حساب کاربری یافت نشد"}, 
                {status: "404"}
            )
        }
        console.log(user);

        if(!_id , !title || !location || !description || !realState || !price || !constructionDate){
            return NextResponse.json({error: "لطفا اطلاهات معتبر وارد کنید"}, 
                {status: 400}
            )
        }

        const profile = await Profile.findOne({_id});
        if(!user._id.equals(profile.userId)){
            return NextResponse.json(
                {error: "دسترسی شما به این اگهی محدود شده است"},
                {status: 403}
            )
        }
        profile.title = title,
        profile.description = description,
        profile.location = location,
        profile.phone = phone,
        profile.realState = realState,
        profile.price = price,
        profile.constructionDate = constructionDate,
        profile.amenities = amenities,
        profile.rules = rules,
        profile.category = category,
        profile.save();

        return NextResponse.json({message: "آگهی ویرایش شد"},{status: 200})
    }catch(err){
        return NextResponse.json({error: "خطایی در سرور رخ داده است"}, 
            {status: 500})
    }
};

