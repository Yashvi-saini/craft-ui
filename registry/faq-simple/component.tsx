export function FaqSimple() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-4xl space-y-6">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
                        <p className="mt-4 text-muted-foreground md:text-xl">
                            Everything you need to know about the product and billing.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <details className="group border rounded-lg bg-card open:ring-1 ring-primary p-4 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground font-medium">
                                <h3 className="text-lg font-semibold">Is this accessible?</h3>
                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Yes. It adheres to the WAI-ARIA design pattern. We strictly verify this with every update.
                            </p>
                        </details>

                        <details className="group border rounded-lg bg-card open:ring-1 ring-primary p-4 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground font-medium">
                                <h3 className="text-lg font-semibold">Can I use this for commercial projects?</h3>
                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                Yes. It is free for personal and commercial projects. No attribution required.
                            </p>
                        </details>

                        <details className="group border rounded-lg bg-card open:ring-1 ring-primary p-4 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-foreground font-medium">
                                <h3 className="text-lg font-semibold">How do I get support?</h3>
                                <svg
                                    className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </summary>
                            <p className="mt-4 leading-relaxed text-muted-foreground">
                                You can join our Discord community or reach out to us via email.
                            </p>
                        </details>
                    </div>
                </div>
            </div>
        </section>
    )
}
