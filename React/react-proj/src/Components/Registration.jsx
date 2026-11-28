import { useState } from 'react'

function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  })
  const [records, setRecords] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [nextId, setNextId] = useState(1)

console.log(formData)

  function handleChange(event) {
    setFormData(previousData => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }))
  }

  console.log(formData)

  function handleSubmit(event) {
    event.preventDefault()

    const record = {
      name: formData.name.trim(),
      email: formData.email.trim(),
    }

    if (editingId !== null) {
      setRecords(previousRecords =>
        previousRecords.map(item =>
          item.id === editingId ? { ...item, ...record } : item
        )
      )
      setEditingId(null)
    } else {
      setRecords(previousRecords => [
        ...previousRecords,
        { id: nextId, ...record },
      ])
      setNextId(previousId => previousId + 1)
    }

    setFormData({ name: '', email: '' })
  }

console.log(formData)

  function handleEdit(record) {
    setFormData({ name: record.name, email: record.email })
    setEditingId(record.id)
  }

  function handleDelete(id) {
    setRecords(previousRecords => previousRecords.filter(record => record.id !== id))

    if (editingId === id) {
      setEditingId(null)
      setFormData({ name: '', email: '' })
    }
  }

  return (
    <main className="min-h-screen bg-white px-4 py-10 text-left">
      <section className="mx-auto w-full max-w-3xl space-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            aria-label="Name"
            autoComplete="name"
            required
            className="min-w-0 flex-1 rounded border border-gray-400 px-4 py-3 text-black placeholder:text-gray-500 focus:outline-2 focus:outline-blue-500"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            aria-label="Email"
            autoComplete="email"
            required
            className="min-w-0 flex-1 rounded border border-gray-400 px-4 py-3 text-black placeholder:text-gray-500 focus:outline-2 focus:outline-blue-500"
          />
          <button
            type="submit"
            className="rounded bg-black px-5 py-3 font-semibold text-white hover:bg-gray-800"
          >
            {editingId === null ? 'Submit' : 'Update'}
          </button>
        </form>

        <div className="overflow-x-auto">
          <table className="w-full border-5 border-white bg-white text-left text-black">
            <thead>
              <tr>
                <th scope="col" className="border border-gray-500 px-4 py-3">Name</th>
                <th scope="col" className="border border-gray-500 px-4 py-3">Email</th>
                <th scope="col" className="border border-gray-500 px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map(record => (
                <tr key={record.id}>
                  <td className="border border-gray-500 px-4 py-3">{record.name}</td>
                  <td className="border border-gray-500 px-4 py-3">{record.email}</td>
                  <td className="whitespace-nowrap border border-gray-500 px-4 py-3">
                    <button
                      type="button"
                      onClick={() => handleEdit(record)}
                      className="mr-2 rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(record.id)}
                      className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  )
}

export default Registration
