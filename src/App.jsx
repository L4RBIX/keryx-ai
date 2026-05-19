import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import WhatWeTest from './components/WhatWeTest'
import AuditPipeline from './components/AuditPipeline'
import DemoSimulator from './components/DemoSimulator'
import ReportPreview from './components/ReportPreview'
import HowItWorks from './components/HowItWorks'
import ForWhom from './components/ForWhom'
import Methodology from './components/Methodology'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import RequestAuditForm from './components/RequestAuditForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <WhatWeTest />
        <AuditPipeline />
        <DemoSimulator />
        <ReportPreview />
        <HowItWorks />
        <ForWhom />
        <Methodology />
        <Pricing />
        <FAQ />
        <RequestAuditForm />
      </main>
      <Footer />
    </>
  )
}
