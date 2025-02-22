import { Link, Head } from "@inertiajs/react";
import { Button, Navbar, Card } from "flowbite-react";
import logo from "../Assets/Logo Full Rumah Makan Soto.png";
import img_soto from "../Assets/soto.png";
import img_soto_jogja from "../Assets/soto_jogja.png";
import img_soto_betawi from "../Assets/soto_betawa.png";
import img_soto_banjar from "../Assets/soto_banjar.png";
import img_soto_malang from "../Assets/soto_malang.png";
import img_soto_makasar from "../Assets/soto_makasar.png";
import img_soto_padang from "../Assets/soto_padang.png";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Navbar fluid rounded>
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-3 h-10 sm:h-14"
                        alt="Logo Rumah Makan Soto"
                    />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <a href="/login">
                        <Button>Login</Button>
                    </a>
                </div>
            </Navbar>

            {/* Hero Section */}
            <section
                className="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply h-screen"
                style={{ backgroundImage: `url(${img_soto})` }}
            >
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 h-full flex flex-col justify-center items-center">
                    <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-none text-white">
                        Selamat Datang di Rumah Makan Soto Bumbu
                    </h1>
                    <h2 className="mb-8 mt-4 text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-gray-300 sm:px-16 lg:px-48">
                        Nikmati Cita Rasa Soto Asli
                    </h2>
                    <p className="mb-8 text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-gray-300 sm:px-16 lg:px-48">
                        Di Rumah Makan Soto Bumbu, kami menyajikan soto dengan
                        cita rasa autentik. Setiap mangkuk soto kami dibuat
                        dengan bahan-bahan segar dan bumbu rahasia yang
                        diwariskan dari generasi ke generasi.
                    </p>
                </div>
            </section>

            {/* Produk Section */}
            <section className="pt-10 bg-gray-100 pb-20">
                <div className="px-4 mx-auto max-w-screen-xl">
                    <h3 className="text-4xl font-bold text-center mb-6">
                        Menu
                    </h3>
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-10">
                        <Card className="">
                            <div className="flex flex-col items-center">
                                <img
                                    src={img_soto_jogja}
                                    alt="Soto Jogja"
                                    className="w-fit h-32 object-cover mb-4"
                                />
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Soto Jogja
                                </h5>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="flex flex-col items-center">
                                <img
                                    src={img_soto_betawi}
                                    alt="Soto Betawi"
                                    className="w-fit h-32 object-cover mb-4"
                                />
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Soto Betawi
                                </h5>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="flex flex-col items-center">
                                <img
                                    src={img_soto_banjar}
                                    alt="Soto Banjar"
                                    className="w-fit h-32 object-cover mb-4"
                                />
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Soto Banjar
                                </h5>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="flex flex-col items-center">
                                <img
                                    src={img_soto_malang}
                                    alt="Soto Malang"
                                    className="w-fit h-32 object-cover mb-4"
                                />
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Soto Malang
                                </h5>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="flex flex-col items-center">
                                <img
                                    src={img_soto_makasar}
                                    alt="Soto Makasar"
                                    className="w-fit h-32 object-cover mb-4"
                                />
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Soto Makasar
                                </h5>
                            </div>
                        </Card>
                        <Card className="">
                            <div className="flex flex-col items-center">
                                <img
                                    src={img_soto_padang}
                                    alt="Soto Padang"
                                    className="w-fit h-32 object-cover mb-4"
                                />
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                                    Soto Padang
                                </h5>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
