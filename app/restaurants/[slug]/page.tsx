export default function Page({ params }: { params: { slug: string } }) {
    
    return <div className="text-black">My Post: {params.slug}</div>
}