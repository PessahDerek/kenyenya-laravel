import HomeLanding from '@/components/app/sections/home.landing';
import CustomAppLayout from '@/layouts/app/custom-app-layout';
import HomeValues from '@/components/app/sections/home.values';
import HomeAboutUs from '@/components/app/sections/home.about-us';
import HomeIntakes from '@/components/app/sections/home.intakes';
import HomeCourses from '@/components/app/sections/home.courses';
import HomeExtraCurricular from '@/components/app/sections/home.extraCurricular';
import HomeNews from '@/components/app/sections/home.news';
import HomeReachUs from '@/components/app/sections/home.reach-us';

export default function Index() {

    return (
        <CustomAppLayout>
            <HomeLanding />
            <HomeValues />
            <HomeAboutUs />
            <HomeIntakes />
            <HomeCourses />
            <HomeExtraCurricular />
            <HomeNews />
            <HomeReachUs />
        </CustomAppLayout>
    );
}
