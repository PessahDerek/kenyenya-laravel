import SectionTitle from '@/components/app/ui/SectionTitle';
import { courses } from '@/lib/datas';
import CourseCard from '@/components/app/cards/CourseCard';


export default function HomeCourses() {

    return (
        <div className={"w-[95%] md:w-2/3 m-auto grid gap-4 place-items-center py-10 auto-rows-max"}>
            <SectionTitle title={"Our courses"} />
            <div className={"w-full grid md:grid-cols-2 gap-5"}>
                {courses.map((course, index) => (
                    <CourseCard {...course} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}

