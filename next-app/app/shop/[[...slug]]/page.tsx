export default function Home({ params }:any) {
    console.log("🚀 ~ Home ~ params:", params)
    return(
        <div className="text-red-500">
            Catch all segments  { params.slug}
        </div>
    )
}