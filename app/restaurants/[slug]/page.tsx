export default function Page({ params }: { params: { slug: string } }) {
    
    return <div className="">My Post: {params.slug}</div>
}