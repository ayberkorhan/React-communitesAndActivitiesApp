
export default function HeroSection() {
  return (
    <header>
    <div class="w-full bg-hero-pattern bg-cover h-96">
        <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
            <div class="text-center">
                <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Yeni bir şey deneyin veya sevdiğiniz şeylerden daha fazlasını yapın.</h1>
                <button class="w-full px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">toplulukları keşfet</button>
            </div>
        </div>
    </div>
</header>

  );
}
