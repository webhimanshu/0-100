export default function Home({params }: {params : {projectId:string , reviewId : string}}) {
    return (
        <div className="text-red-500 text-2xl">
             Revview Id  {params.reviewId}
             Project Id  {params.projectId}
        </div>
    )
}