export default function Home({params }: any) {
    return (
        <div className="text-red-500 text-2xl">
             Folder Id  {params.projectId}
        </div>
    )
}