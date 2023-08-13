import { useRouter } from 'next/router'
import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import CardTestimony from '@/components/CardTestimony'
import CardWalls from '@/components/CardWalls'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ProjectDetails from '@/components/ProjectDetails'
import ProjectsSteps from '@/components/ProjectsSteps'
import Head from 'next/head'
import StyleSheet from '../../styles'

function Slug() {
  const router = useRouter()
  const { slug } = router.query
  console.log(slug)
  const title = slug
    ?.toLowerCase()
    ?.split(' ')
    ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    ?.join(' ')
    ?.replace('-', ' ')
  return (
    <>
      <Head>
        <title>Service View | Schadtle Outdoor Services</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Navbar />
        <section className='pt-[172px] px-8 mb-8 md:px-12 lg:px-32 lg:mb-16'>
          <BreadCrumb
            title={'Services'}
            content={'Retaining Walls Des...'}
            link={`/our-services`}
            linkTitle={`/our-services`}
          />
        </section>
        <section className='px-8 md:px-12 mb-16 lg:px-32 lg:mb-32'>
          <ProjectDetails
            title={title}
            content={`Our process involves careful planning, attention to detail, and the use of high-quality materials. By following these steps, we can create a beautiful, functional retaining wall that will enhance the aesthetics and functionality of their outdoor space for years to come.`}
            contentType={'Private Residential Project '}
            img={'../images/services_img/services_page.png'}
          />
        </section>
        <section className='px-8 mb-32 md:px-12 lg:px-32'>
          <h3 className={`${StyleSheet.HeadingContent.heading} mb-6 lg:mb-12`}>
            Our Process
          </h3>
          <div className='mb-12'>
            <ProjectsSteps
              title={'Assess the Site'}
              content={`Before starting any retaining wall project, it is important to assess the site to determine the type of wall that is most appropriate for the location, taking into account factors such as soil type, drainage, and the slope of the land.`}
            />
          </div>
          <div className='mb-12'>
            <ProjectsSteps
              title={'Choose the Right Materials'}
              content={`The materials used in the retaining wall should be chosen based on their durability, strength, and aesthetic appeal. Common materials include natural stone, concrete blocks, and timber.`}
            />
          </div>
          <div className='mb-12'>
            <ProjectsSteps
              title={'Design the Wall'}
              content={`The design of the retaining wall should be based on the needs of the site and the preferences of the homeowner. The wall should be engineered to withstand the lateral pressure of the soil behind it, and should also take into account factors such as the height of the wall and any drainage considerations.`}
            />
          </div>
          <div className='mb-12'>
            <ProjectsSteps
              title={'Prepare the Site'}
              content={`Before building the retaining wall, the site must be excavated and prepared to ensure a stable foundation. This may involve installing drainage solutions such as weep holes or French drains to prevent water buildup behind the wall.`}
            />
          </div>
          <div className='mb-12'>
            <ProjectsSteps
              title={'Build the Wall'}
              content={`The retaining wall should be built in courses, with each layer being reinforced with a layer of gravel or compacted soil. The wall should also be backfilled with gravel or crushed stone to provide additional support.`}
            />
          </div>
          <div className=''>
            <ProjectsSteps
              title={'Finishing Touches'}
              content={`Once the wall is complete, any necessary finishing touches such as topsoil or landscaping can be added to create a seamless transition between the wall and the surrounding landscape.`}
            />
          </div>
        </section>
        <section className='px-8 mb-32 md:px-12 lg:px-32'>
          <div className='lg:w-[60%]'>
            <h3
              className={`${StyleSheet.HeadingContent.heading} mb-6 lg:mb-12`}
            >
              Types of Retaining Walls we Design
            </h3>
          </div>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <CardWalls
              title={' Gravity Walls'}
              img={'../images/projects_imgs/wall_one.png'}
            />
            <CardWalls
              title={' Cantilever Walls'}
              img={'../images/projects_imgs/wall_two.png'}
            />
            <CardWalls
              title={' Anchored Walls'}
              img={'../images/projects_imgs/wall_three.png'}
            />
          </div>
        </section>
        <section className='px-8 mb-32 md:px-12 lg:px-32'>
          <div className='flex flex-col gap-2 mb-12'>
            <h2 className={StyleSheet.HeadingContent.heading}>Testimony</h2>
            <p className={StyleSheet.HeadingContent.content}>
              Our clients are all praise for us about our exploits
            </p>
          </div>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <CardTestimony
              desc={`Vertical pixel horizontal main group rectangle strikethrough stroke
            bold. Star community underline star font share content plugin layout
            slice. Library export font star editor library. Ellipse.`}
              img={'../images/testimonial.png'}
              name={'Tunde Ajayi'}
              location={'Location'}
              starIcon={'../star.svg'}
              alt={'tunde_ajayi'}
              source={'Trust Pilot'}
            />
            <CardTestimony
              desc={`Vertical pixel horizontal main group rectangle strikethrough stroke
            bold. Star community underline star font share content plugin layout
            slice. Library export font star editor library. Ellipse.`}
              img={'../images/testimonial.png'}
              name={'Tunde Ajayi'}
              location={'Location'}
              starIcon={'../star.svg'}
              alt={'tunde_ajayi'}
              source={'Trust Pilot'}
            />
            <CardTestimony
              desc={`Vertical pixel horizontal main group rectangle strikethrough stroke
            bold. Star community underline star font share content plugin layout
            slice. Library export font star editor library. Ellipse.`}
              img={'../images/testimonial.png'}
              name={'Tunde Ajayi'}
              location={'Location'}
              starIcon={'../star.svg'}
              alt={'tunde_ajayi'}
              source={'Trust Pilot'}
            />
          </div>
        </section>
        <footer className="bg-[url('/images/footer_background.png')] bg-cover bg-center">
          <Footer />
        </footer>
      </>
    </>
  )
}

export default Slug
