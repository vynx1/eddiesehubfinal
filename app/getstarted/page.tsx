import MobileNav from "@/components/MobileNav";
import Navbar from "@/components/Navbar";

export default function Page() {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <div className="hidden md:block w-full pt-4 pb-20">
                <Navbar />
            </div>
            
            {/* Mobile Navbar */}
            <div className="flex md:hidden w-full fixed top-0 right-0 mt-5 z-50 pl-6 items-end">
                <MobileNav />
            </div>
        <main className="container mx-auto w-full">
          <section className="grid gap-12 md:grid-cols-2 lg:gap-24">
            <div className="pt-20 md:pt-0">
                <h1 className="hidden text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#00FFAB] pb-4 md:flex">
                        Get Started Today
                </h1>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Step 1: Choose Your Session</h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Browse our selection of available sessions and pick the one that best fits your needs. We offer a variety
                of options to cater to your preferences.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Step 1 Image"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </section>
          <section className="hidden md:grid gap-12 grid-cols-2 lg:gap-24 mt-12">
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Step 2 Image"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Step 2: Schedule Your Session
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Once you've selected your session, choose a convenient date and time that works best for you. Our calendar
                will show you available slots to book your appointment.
              </p>
            </div>
          </section>
          <section className="md:hidden grid gap-12 md:grid-cols-2 lg:gap-24 mt-12">
            
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Step 2: Schedule Your Session
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Once you've selected your session, choose a convenient date and time that works best for you. Our calendar
                will show you available slots to book your appointment.
              </p>
              <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Step 2 Image"
              className="rounded-xl object-cover mt-12"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
            </div>
          </section>
          <section className="grid gap-12 md:grid-cols-2 lg:gap-24 mt-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Step 3: Confirm Your Booking
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Review your session details and payment information, then complete the booking process. You'll receive a
                confirmation email with all the necessary details.
              </p>
            </div>
            <img
              src="/placeholder.svg"
              width="600"
              height="400"
              alt="Step 3 Image"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
            />
          </section>
        </main>
      </div>
    )
  }