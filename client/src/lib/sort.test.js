import { asc, desc } from './sort'

const data = [{id: 2, price: 30, name: 'Mike'}, {id: 1, price: 34, name: 'Mario'}]

describe('lib/sort', () => {
  describe('asc()', () => {
    describe('sort by id', () => {
      it('returns data in correct order', () => {
        const result = asc(data, 'id')
        expect(result[0]).toMatchObject({
          id: 1
        })
        expect(result[1]).toMatchObject({
          id: 2
        })
      })
    })

    describe('sort by price', () => {
      it('returns data in correct order', () => {
        const result = asc(data, 'price')
        expect(result[0]).toMatchObject({
          price: 30
        })
        expect(result[1]).toMatchObject({
          price: 34
        })
      })
    })

    describe('sort by name', () => {
      it('returns data in correct order', () => {
        const result = asc(data, 'name')
        expect(result[0]).toMatchObject({
          name: 'Mario'
        })
        expect(result[1]).toMatchObject({
          name: 'Mike'
        })
      })
    })
  })

  describe('desc()', () => {
    describe('sort by id', () => {
      it('returns data in correct order', () => {
        const result = desc(data, 'id')
        expect(result[0]).toMatchObject({
          id: 2
        })
        expect(result[1]).toMatchObject({
          id: 1
        })
      })
    })

    describe('sort by price', () => {
      it('returns data in correct order', () => {
        const result = desc(data, 'price')
        expect(result[0]).toMatchObject({
          price: 34
        })
        expect(result[1]).toMatchObject({
          price: 30
        })
      })
    })

    describe('sort by name', () => {
      it('returns data in correct order', () => {
        const result = desc(data, 'name')
        expect(result[0]).toMatchObject({
          name: 'Mike'
        })
        expect(result[1]).toMatchObject({
          name: 'Mario'
        })
      })
    })
  })
})
