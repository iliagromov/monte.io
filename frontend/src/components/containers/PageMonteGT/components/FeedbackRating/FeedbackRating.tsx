import { StarFilled } from '@ant-design/icons'
import cn from 'classnames'
import React, { FC, useMemo } from 'react'
import { numberFormat } from '../../../../../utils'
import './style.scss'

type FeedbackRatingProps = {
  className?: string
  voteRatings: {
    rating: number
    count: number
  }[]
}

const FeedbackRating: FC<FeedbackRatingProps> = ({
  className,
  voteRatings = [],
}) => {
  const starList = useMemo(() => [5, 4, 3, 2, 1], [])
  const totalVotes = useMemo(
    () =>
      voteRatings.reduce((accumulator, { count }) => {
        return accumulator + count
      }, 0),
    [voteRatings]
  )
  const average = useMemo(() => {
    const summ = voteRatings.reduce((accumulator, { rating, count }) => {
      return accumulator + rating * count
    }, 0)

    const roundedAverage = Math.round((summ / totalVotes) * 10) / 10

    return roundedAverage
  }, [voteRatings])

  const formattedTotalVotes = useMemo(
    () => numberFormat(totalVotes, 0, 3, ' '),
    [totalVotes]
  )

  const renderDetailed = starList.map(ratingStar => {
    const count = voteRatings.find(v => v.rating === ratingStar)?.count
    const percentage = count ? Math.round((count / totalVotes) * 100) : 0
    const barStyle = {
      width: `${percentage}%`,
    }

    return (
      <div className="feedback-rating__detailed-item" key={ratingStar}>
        <div className="feedback-rating__stars">
          {[...Array(ratingStar)].map((v, j) => (
            <StarFilled className="feedback-rating__star" key={j} />
          ))}
        </div>
        <div className="feedback-rating__bar">
          <span className="feedback-rating__bar-line" style={barStyle} />
        </div>
      </div>
    )
  })

  return (
    <div className={cn('feedback-rating', className)}>
      <div className="row align-items-center">
        <div className="col-auto text-center">
          <div className="feedback-rating__number">{average}</div>
          <div className="feedback-rating__votes">
            {formattedTotalVotes} ratings
          </div>
        </div>

        <div className="col pl-md-4">
          <div className="feedback-rating__detailed">{renderDetailed}</div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackRating
