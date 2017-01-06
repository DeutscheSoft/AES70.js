/*
 * This file has been generated. Please do not modify
 * it directly.
 *
 */
(function(w, module) {
var f = function(w, OCA) {
 var SP = w.SP;
/*!
 *! A ratio expressed in dB. Typically used for gain settings.
 */
/* typedef number OcaDB; */

/*!
 *! An absolute level expressed in dB above the given absolute reference
 *! level.
 */
/* typedef number OcaDBr; */

/*!
 *! An absolute analogue level expressed in dB re 1 volt. This datatype
 *! may only be used for parameters that reflect analogue signal values,
 *! e.g. pre-ADC input signals and post-DAC output signals.
 */
/* typedef number OcaDBV; */

/*!
 *! An absolute analogue level expressed in dB re 0.774 volts. This
 *! datatype may only be used for parameters that reflect analogue signal
 *! values, e.g. pre-ADC input signals and post-DAC output signals.
 */
/* typedef number OcaDBu; */

/*!
 *! An absolute level value for digital signals, expressed in dB relative
 *! to the device maximum internal digital sample value. For example, a
 *! digital signal whose peak sample value is 7dB below the maximum
 *! digital sample value shall be said to have a peak level of -7 dBFS.
 */
/* typedef number OcaDBFS; */

/*!
 *! An absolute level expressed in dB relative to the nominal device
 *! operating level. The nominal device operating level is a
 *! device-specific signal level chosen as a normal or typical signal
 *! amplitude for the device.
 */
/* typedef number OcaDBz; */

/*!
 *! Strong datatype for frequency in Hertz.
 */
/* typedef number OcaFrequency; */

/*!
 *! Time of day in OCA standard format
 */
/* typedef number OcaTimeOfDay; */

/*!
 *! Strong datatype for time interval in seconds.
 */
/* typedef number OcaTimeInterval; */

/*!
 *! General-purpose period of time in milliseconds. As this type is mostly
 *! used for management purposes an integer base type is used and it is
 *! expressed in milliseconds.
 */
/* typedef number OcaPeriod; */

/*!
 *! Strong datatype for temperature in degrees Celsius.
 */
/* typedef number OcaTemperature; */

/*!
 *! Mute states
 */
OCA.OcaMuteState = SP.enum({
    Muted: 1,
    Unmuted: 2,
});


/*!
 *! Polarity states
 */
OCA.OcaPolarityState = SP.enum({
    NonInverted: 1,
    Inverted: 2,
});


/*!
 *! Enumeration of types of delay units that are available in OCA.
 */
OCA.OcaDelayUnit = SP.enum({
    Time: 1,
    Distance: 2,
    Samples: 3,
    Microseconds: 4,
    Milliseconds: 5,
    Centimeters: 6,
    Inches: 7,
    Feet: 8,
});


/*!
 *! Enumeration of classicalr filter types that can be used by OCA
 *! objects.
 */
OCA.OcaClassicalFilterShape = SP.enum({
    Butterworth: 1,
    Bessel: 2,
    Chebyshev: 3,
    LinkwitzRiley: 4,
});


/*!
 *! Enumeration of passband types that can be used by OCA objects.
 */
OCA.OcaFilterPassBand = SP.enum({
    HiPass: 1,
    LowPass: 2,
    BandPass: 3,
    BandReject: 4,
    AllPass: 5,
});


/*!
 *! Enumeration of curve shapes used by OcaFilterParametric.
 */
OCA.OcaParametricEQShape = SP.enum({
    PEQ: 1,
    LowShelv: 2,
    HighShelv: 3,
    LowPass: 4,
    HighPass: 5,
    BandPass: 6,
    AllPass: 7,
    Notch: 8,
    ToneControlLowFixed: 9,
    ToneControlLowSliding: 10,
    ToneControlHighFixed: 11,
    ToneControlHighSliding: 12,
});


/*!
 *! Enumeration of the types of dynamic functions that are available in
 *! OCA.
 */
OCA.OcaDynamicsFunction = SP.enum({
    None: 0,
    Compress: 1,
    Limit: 2,
    Expand: 3,
    Gate: 4,
    AGC: 5,
});


/*!
 *! Enumeration of waveform types that can be used by OCA objects.
 */
OCA.OcaWaveformType = SP.enum({
    None: 0,
    DC: 1,
    Sine: 2,
    Square: 3,
    Impulse: 4,
    NoisePink: 5,
    NoiseWhite: 6,
    PolarityTest: 7,
});


/*!
 *! Enumeration of waveform types that can be used by OCA objects.
 */
OCA.OcaSweepType = SP.enum({
    Linear: 1,
    Logarithmic: 2,
    None: 0,
});


/*!
 *! Enumeration of units of measure that can be used in OCA classes. Only
 *! SI (base or derived) units are specified, so that internal
 *! calculations will not need to convert. If conversion is needed it
 *! should only be done in user interfaces. The datatype of a reading
 *! expressed in one of these units of measure is FLOAT.
 */
OCA.OcaUnitOfMeasure = SP.enum({
    Ampere: 4,
    DegreeCelsius: 2,
    Hertz: 1,
    None: 0,
    Ohm: 5,
    Volt: 3,
});


/*!
 *! Enumeration of presentation units that can be used in OCA classes.
 *! Property values of OCA objects are always in SI units (unless
 *! explicitly documented otherwise), but the presentation unit can also
 *! be stored to indicate in which unit the value was presented in a user
 *! interface. This way another controller can also present it in that
 *! unit (i.e. doing a conversion on the controller before presenting it)
 *! to keep the user presentation uniform. Note that the presentation unit
 *! may be equal to the unit of the property (in which case of course no
 *! conversion is needed).
 */
OCA.OcaPresentationUnit = SP.enum({
    dBu: 0,
    dBV: 1,
    V: 2,
});


/*!
 *! Enumeration of the types of level detector characteristics. Used in
 *! dynamics classes and for sensors.
 */
OCA.OcaLevelDetectionLaw = SP.enum({
    None: 0,
    RMS: 1,
    Peak: 2,
});


/*!
 *! Enum that describes whether an <b>OcaSensor</b>'s current reading
 *! value can be trusted, and if not, why not.
 */
OCA.OcaSensorReadingState = SP.enum({
    Unknown: 0,
    Valid: 1,
    Underrange: 2,
    Overrange: 3,
    Error: 4,
});


/*!
 *! Enumeration of level meter laws.
 */
OCA.OcaLevelMeterLaw = SP.enum({
    VU: 1,
    StandardVU: 2,
    PPM1: 3,
    PPM2: 4,
    LKFS: 5,
    RMS: 6,
    Peak: 7,
    ProprietaryValueBase: 128,
});


/*!
 *! Multifield descriptor that defines a delay value element.
 */
OCA.OcaDelayValue = function(DelayValue, DelayUnit) {
    this.DelayValue = DelayValue;
    this.DelayUnit = DelayUnit;
};
OCA.OcaDelayValue.prototype = {
    signature: new SP.signature(SP.FLOAT32, OCA.OcaDelayUnit),
    _values : function() {
        return [ this.DelayValue, this.DelayUnit ];
    },
};

/*!
 *! Strong datatype for frequency response.
 */
OCA.OcaFrequencyResponse = function(Characteristic) {
    this.Characteristic = Characteristic;
};
OCA.OcaFrequencyResponse.prototype = {
    signature: new SP.signature(SP.MAP(SP.FLOAT32, SP.FLOAT32)),
    _values : function() {
        return [ this.Characteristic ];
    },
};

/*!
 *! A complex (i.e. magnitude + phase) transfer function.
 */
OCA.OcaTransferFunction = function(Frequency, Amplitude, Phase) {
    this.Frequency = Frequency;
    this.Amplitude = Amplitude;
    this.Phase = Phase;
};
OCA.OcaTransferFunction.prototype = {
    signature: new SP.signature(SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32), SP.LIST(SP.FLOAT32)),
    _values : function() {
        return [ this.Frequency, this.Amplitude, this.Phase ];
    },
};

/*!
 *! Multifield descriptor for a pilot tone detector element.
 */
OCA.OcaPilotToneDetectorSpec = function(Threshold, Frequency, PollInterval) {
    this.Threshold = Threshold;
    this.Frequency = Frequency;
    this.PollInterval = PollInterval;
};
OCA.OcaPilotToneDetectorSpec.prototype = {
    signature: new SP.signature(SP.FLOAT32, SP.FLOAT32, SP.UINT32),
    _values : function() {
        return [ this.Threshold, this.Frequency, this.PollInterval ];
    },
};

};
if (module) module.exports = f;
else f(w, w.OCA || (w.OCA = {}));
})(this, module);
