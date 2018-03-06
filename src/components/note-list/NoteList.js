import React from 'react'
import Note from '../note/Node'
import Masonry from 'react-masonry-component';

const NoteList = ({ notes, user, onContentChange, deleteNote, changeColor }) => {
  return (
     <Masonry
          className={'my-gallery-class'} // default ''
          elementType={'div'} // defaul options={} // default {}
          options={{transitionDuration: 1000, transitionProperty: 'width'}}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
        {
          notes.filter(note=>note.creator === user.username).map(note => (
            <Note 
              key={note.id}
              note={note}
              changeContent={onContentChange}
              deleteNote={deleteNote}
              changeColor={changeColor}
            ></Note>
          ))
        }
      </Masonry>
  )
}

export default NoteList

