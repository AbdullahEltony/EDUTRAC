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
        <div className='flex flex-col gap-12'>
          <HoursTable />
          <ProgramCreditDistribution />
          <Table10 />
          <GradeTable />
          <LevelProgressionTable />
        </div>
      </div>
    </div>
  )
}

export default RulesPage