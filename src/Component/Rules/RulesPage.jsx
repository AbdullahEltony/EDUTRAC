import React from 'react'
import NavMenu from '../NavMenu'
import ProgressBar from '../shared/ProgressBar'
import HoursTable from './HoursTable'
import ProgramCreditDistribution from './Distribution'
import Table10 from './Table10'
import GradeTable from './Grades'
import LevelProgressionTable from './LevelProgression'

const RulesPage = () => {
  return (
    <div className='w-full flex'>
      <NavMenu />
      <div className='w-full'>
        <ProgressBar />
        <div className='flex flex-col gap-12'>
          <LevelProgressionTable />
          <HoursTable />
          <ProgramCreditDistribution />
          <Table10 />
          <GradeTable />
        </div>
      </div>
    </div>
  )
}

export default RulesPage