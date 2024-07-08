
import ProtectedRoute from "@/ProtectedRoute/ProtectedRoute";
import Container from "../components/Shared/Container";


const page = () => {


    return (
        <ProtectedRoute>
            <section className=''>
                <Container>
                    <h1 className="text-6xl text-center my-20 font-bold">This is route</h1>

                </Container>
            </section>
        </ProtectedRoute>
    )
}
export default page;