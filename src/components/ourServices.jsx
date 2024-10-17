import React from 'react';

export const OurServices = (props) => {
  return (
    <div id='ourServices'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img
              src='img/ourServices.jpg'
              className='img-responsive'
              alt=''
            />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Our Services</h2>
              <p>{props.data ? props.data.paragraph1 : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph2 : 'loading...'}</p>
              <p>{props.data ? props.data.paragraph3 : 'loading...'}</p>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-12 col-md-12 col-lg-12'>
            <div className='service-text'>
              <h2 className='mid'>
                We supply High Quality Products from the most reliable
                Suppliers Worldwide.
              </h2>
            </div>
            <div className='service-text supply'>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  <ul>
                    {props.data
                      ? props.data.WeOffer.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : 'loading'}
                  </ul>
                </div>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                  {' '}
                  <img
                    src='img/weOffer.jpg'
                    className='img-responsive'
                    alt=''
                  />{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
