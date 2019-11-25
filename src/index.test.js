import React from 'react'

import { Visible } from './'

describe('Visible', () => {
  const children = <p>test</p>
  const FallbackComponent = ({ text }) => <h1>{text}</h1>

  const testComponent = ({ condition }) => Visible({
    when: condition,
    fallback: FallbackComponent({ text: 'loading' }),
    children
  })

  const testComponentWithoutFallback = ({ condition }) => Visible({
    when: condition,
    children
  })

  it('Shows children when its condition is met', () => {
    expect(testComponent({ condition: true })).toEqual(children)
  })

  it('Shows a fallback component when its condition is not met', () => {
    expect(testComponent({ condition: false })).toEqual(<h1>loading</h1>)
    expect(testComponent({ condition: null })).toEqual(<h1>loading</h1>)
    expect(testComponent({ condition: undefined })).toEqual(<h1>loading</h1>)
    expect(testComponent({ condition: 0 })).toEqual(<h1>loading</h1>)
  })

  it('Renders children when its condition is met and no fallback is provided', () => {
    expect(testComponentWithoutFallback({ condition: true })).toEqual(children)
  })
  it('Renders null when its condition is not met, and no fallback is provided', () => {
    expect(testComponent({ condition: undefined })).toEqual(null)
    expect(testComponent({ condition: null })).toEqual(null)
    expect(testComponent({ condition: 0 })).toEqual(null)
    expect(testComponentWithoutFallback({ condition: false })).toEqual(null)
  })
})
